import React from "react";
import { shallow } from "enzyme";
import { EmailPage } from "./EmailPage";
import EmailForm from "../components/EmailForm";
import initialState from "../reducers/initialState";

describe("<EmailPage />", () => {
  const actions = {
    send: jest.fn(),
  };

  it("should contain <EmailForm />", () => {
    const wrapper = shallow(
      <EmailPage
        actions={actions}
        email={initialState.email}
      />
    );

    expect(wrapper.find(EmailForm).length).toEqual(1);
  });
});
