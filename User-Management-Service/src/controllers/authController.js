import * as authService from '../services/authService.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signup = async (req, res) => {
  try {
    const { user, token } = await authService.signup(req.body);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login(email, password);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    await authService.resetPassword(email, newPassword);
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const googleAuthCallback = (req, res) => {
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  res.redirect(`/auth/success?token=${token}`);
};

export const googleSignIn = async (req, res) => {
    try {
      const { token } = req.body;
      const { user, token: jwtToken } = await authService.googleSignIn(token);
      res.status(200).json({ user, token: jwtToken });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };