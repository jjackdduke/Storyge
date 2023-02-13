import Api from "lib/customApi";
import { getCookie } from "utils/Cookies";

export async function postDiary(diary, content) {
  try {
    const response = await Api.post(
      "/diary",
      {
        analizedResult: content[1],
        diaryContent: diary,
        emoticonName: content[0],
        scope: 1,
      },
      {
        headers: {
          Authorization: getCookie("token"),
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
