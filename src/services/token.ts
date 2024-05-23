const auth_token_key_name = 'six-cities-token';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(auth_token_key_name);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(auth_token_key_name, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(auth_token_key_name);
};
