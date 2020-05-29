import { INCREMENT, DECREMENT } from "./constants";

export const increment = payload => ({
  type: INCREMENT,
  payload
});

export const decrement = payload => ({
  type: DECREMENT,
  payload
});

// payloadはnumber型で引数で受け取った分だけ count を増加または減少させることができるようにしました。

// increment(c)を呼ぶことで、INCREMENTという引数のc分だけ state のcountを増加させることができる action を発行することができるようになります。decrementも同様です。