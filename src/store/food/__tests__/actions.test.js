import {
  getFood,
  getFoodFailure,
  getFoodRequest,
  getFoodSuccess,
  GET_FOOD_SUCCESS,
} from "../actions";

describe("getFoodSuccess test", () => {
  it("returns obj with type and payload", () => {
    const payload = [];
    const expected = {
      type: GET_FOOD_SUCCESS,
      payload,
    };

    const received = getFoodSuccess(payload);
    expect(expected).toEqual(received);
  });
});

describe("getFoodTest", () => {
  it("calls fn passed as an arg with getFoodReq", () => {
    const mockDispatch = jest.fn();

    getFood()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(getFoodRequest());
  });

  it("calls fn passed as an arg with getFoodSuc if fetch was successful", async () => {
    const mockDispatch = jest.fn();
    const result = ["test"];
    // eslint-disable-next-line no-undef
    fetchMock.mockResponseOnce(JSON.stringify(result));

    await getFood()(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(getFoodSuccess(result));
  });

  it("calls fn passed as an arg with getFoodSuc if fetch was unsuccessful", async () => {
    const mockDispatch = jest.fn();
    const error = new Error("some fetch error");
    // eslint-disable-next-line no-undef
    fetchMock.mockRejectOnce(error);

    await getFood()(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(getFoodFailure(error));
  });
});
