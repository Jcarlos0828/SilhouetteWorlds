import ModelError from "../utils/modelError";
import Post from "./model";
import EntityModel from "../utils/entity";

describe("creating post", () => {
  it("throws error on missing fields", async () => {
    const emptyData = {};
    const newPost = new Post(emptyData);
    const resSave = await newPost.validate().catch((err) => err);
    expect(resSave).toBeInstanceOf(ModelError);

    expect(resSave.err).toEqual({
      shortCode: "The short code field is necessary.",
      wouldRecommend: "The recommendation field is necessary.",
      cost: "The cost field is necessary.",
      description: "The description field is necessary.",
      date: "The date field is necessary.",
    });
  });

  it("throws error on repeated unique field", async () => {
    const mockPosts = [
      {
        shortCode: "",
        wouldRecommend: "",
        cost: "",
        description: "",
        date: "",
        photos: "",
      },
    ];
    jest.spyOn(EntityModel.prototype, "find").mockImplementation((query) => {
      return mockPosts.filter((post) =>
        Object.entries(query).every(([key, value]) => value === post[key])
      );
    });

    const emptyData = {};
    const newPost = new Post(emptyData);
    const resSave = await newPost.validate().catch((err) => err);
    expect(resSave).toBeInstanceOf(ModelError);

    expect(resSave.err).toEqual({
      shortCode: "There is already another element with that code.",
    });
  });
});

describe("reading posts", () => {});

describe("updating posts", () => {});

describe("removing posts", () => {});
