// src/stories/LoginForm.s
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../Store/store";
import LoginForm from "../Components/LoginFormStory";
import "../CSS/form.css";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/LoginForm",
  component: LoginForm,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
  argTypes: {
    initialValues: {
      control: 'object',
      defaultValue: {
        email: "",
        password: "",
      },
    },
    onSubmit: { action: 'submitted' },
  },
};

const Template = (args) => <LoginForm {...args} />;

export const WithOutEmail = Template.bind({});
WithOutEmail.args = {
  initialValues: {
    email: "",
    password: "admin123",
  },
    onSubmit: action('Email Not Entered'),
};
export const WithOutPass = Template.bind({});
WithOutPass.args = {
  initialValues: {
    email: "admin@admin.com",
    password: "",
    },
    onSubmit: action('Password Not Entered'),
};
export const WithOutEmailPass = Template.bind({});
WithOutEmailPass.args = {
  initialValues: {
    email: "",
    password: "",
  },
  onSubmit: action('Email and Password Not Entered'),
};
export const WithEmailPass = Template.bind({});
WithEmailPass.args = {
  initialValues: {
    email: "admin@admin.com",
    password: "admin123",
    },
    onSubmit: action('Email and Password Entered'),
};
export const WithIncorrectEmail = Template.bind({});
WithIncorrectEmail.args = {
  initialValues: {
    email: "admin",
    password: "admin123",
    },
    onSubmit: action('Incorrect Email Entered'),
};
export const WithIncorrectPass = Template.bind({});
WithIncorrectPass.args = {
  initialValues: {
    email: "admin@admin.com",
    password: "admin",
    },
    onSubmit: action('Incorrect Password Entered'),
};

