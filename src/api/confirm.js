import { PGP_CONFIRM } from '../constants/fields';

export const convertPgpConfirmData = ({ key, decodedKey }) => ({
  [PGP_CONFIRM.PGP_KEY]: key,
  [PGP_CONFIRM.DECODED_PGP_KEY]: decodedKey,
});
