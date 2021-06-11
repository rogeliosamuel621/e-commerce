import { IController } from '../../types/controllers';
import { User } from './user.services';
import { AuthServices } from '../auth/auth.services';
import { statusCodes } from '../../config';
import controllerResponse from '../../helpers/controllerResponse';

const registerController: IController = async (req, res) => {
  const { data, message, error } = await User.register(req.body);

  return controllerResponse(res, data, message, statusCodes.CONTENT_CREATED, error);
};

const loginController: IController = async (req, res) => {
  const { data, message, error } = await User.login(req.body.username, req.body.password);

  return controllerResponse(res, data, message, statusCodes.OK, error);
};

const getUserData: IController = async (req, res) => {
  const { data, error, message } = await AuthServices.getUser(req.user.id);

  return controllerResponse(res, data, message, statusCodes.OK, error);
};

const updateUserData: IController = async (req, res) => {
  const { username, email } = req.body;

  const { data, error, message } = await User.UpdateUserInfo(req.user.id, username, email);

  return controllerResponse(res, data, message, statusCodes.OK, error);
};

const refreshTokenController: IController = async (req, res) => {
  const { data, error, message } = AuthServices.refreshToken(req.user.id);

  return controllerResponse(res, data, message, statusCodes.OK, error);
};

export { registerController, loginController, refreshTokenController, getUserData, updateUserData };
