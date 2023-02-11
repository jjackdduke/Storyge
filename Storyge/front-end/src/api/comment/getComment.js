import Api from "lib/customApi";
import { getCookie } from "utils/Cookies";

export async function getComment(diaryId) {
  try {
    const response = await Api.get(`/review/${diaryId}`, {
      headers: {
        Authorization: getCookie("token"),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
