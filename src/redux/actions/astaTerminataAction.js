export const ASTA_TERMINATA = "ASTA_TERMINATA";

export const astaTerminataAction = (payload) => {
  return {
    type: ASTA_TERMINATA,
    payload,
  };
};
