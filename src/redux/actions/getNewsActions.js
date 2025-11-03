export const GET_NEWS = "GET_NEWS";

export const getNewsAction = () => {
  //SALVO URL DEL SITO CHE CONVERTE RSS IN JSON
  const rss2jsonURL = "https://api.rss2json.com/v1/api.json?rss_url=";

  //SALVO URL DEL RSS DELLA GAZZETTA
  const gazzettarssURL =
    "https://www.gazzetta.it/dynamic-feed/rss/section/Calcio/Serie-A.xml";

  return async (dispatch) => {
    fetch(rss2jsonURL + encodeURIComponent(gazzettarssURL))
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: GET_NEWS,
          payload: data.items,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
