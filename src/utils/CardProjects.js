const pjtNLW4 =
  'https://previews.dropbox.com/p/thumb/ABHSqoVKdf7scfHQojgFM0CapWJf4KMistmsW-JsEVWYwzPFRmIuTkgPWfFIccHqJNd3faovUsDpolp938buhL4JDFePmazk6Vu32XsexftaErNkWVLxlbtyIgeP70fh1JahEP-rv7YjrCIGYEq7m2AKS9D0WDGaMPVVAO4fWcnnewyJc8Pg0O_LEg4vPjTLf2nNiEd2ap7I21x-Jt2yvXS80yqQtjaaVtqZBqKs-hPqHdBYBQdposAGBLBt4IZLaoesK1p1l8z47YoEmJ3gNQ0oEIqou4-HOD7FyR3GgZ-NwUlhG2umbBC06LVZ2tqNjTNw7aXHK0lktSn4l3u-vn3mMPdn528jwjwAAlqbuRGKGA/p.png?fv_content=true&size_mode=5';

const pjtMemoria =
  'https://previews.dropbox.com/p/thumb/ABHv0AVc2UWuSQpvVvky5JLmRJv-gW7YWzf6p0aD8-LgnQd9YRLNctwwWl3EMzWGCF3ErHOUXUOkqK0qhNpKv8D9T-myivAu1CYT9mpQj5NgnSkuU4f8jzVGMgA05lRGgvKpk3wbgTU0t_B2HDqeHvVt7ZtOFXQto-xFww82y3EX0oKhGJFH86gsnHXiYrNIEJhd_aSI6BrH2_cD7zqPnZfRTAMfcVlB-cncpBcIU657BUq7KRKW5Whb-qxOQIKJDJC3k8R9Gzap9oP8au1OjKQdswTaBID-eOEJuakyZavCWUJ0-FJYDeWR_-y_fJtzYUWos2IZpKnhR3QmneCA4BzcQsmKPaoZdgUAhNyVMd9YWg/p.png?fv_content=true&size_mode=5';

const pjtInstagram =
  'https://previews.dropbox.com/p/thumb/ABEqtm92VWmcWwkweDFspJ64VTE-64ASfBicJ5tqFUwV02Q98LmmyKMSPe8jjfEI4Za3vr2M9DmjGAT2MMk1p9rjqT3cSPTeT75KWVMxTd06mawAAZgHB6fEj2RtNquYfv4VHBctH-dDyewR_LA-9f1MabmOoVJeah7HxsbQEzzQtH1TweO6yE1YY8-sYb8oONTCKZQy1xwyt7vXZdi-2CWbZYYTyLOd2UVY7dfjqWBj0dYo7c7lmKjSWlKOibsNpM6MbfbBQILj8WMyPiYWa33kD_braIBox3xxw_vqz8EieyyIqC9edUh1f3dw7xNUeyBpV7wDWprE2mBu3yTFA93KBviD1RKT6N8vf9okgeSgRQ/p.png?fv_content=true&size_mode=5';

const pjtNetflix =
  'https://previews.dropbox.com/p/thumb/ABHbofFVfDhX9dbMWi68KVNMXjEH6sWSVcqPMCm9TWKOHAztWo-xfO3Xa4OIwuDIPXmCY87idi8dPYMDtKkaJDXI8ABoVC9qQPQhC8zZmhLszkfP5NkYtc2FNzhYHLKHdcd5TALlQUaL2Ngte7UJu8W_v14dDqeJAgR4hRsNTyP7T-N375NKiBrhqkPc0jQsa9udbYXpO44-Tzwaaz5O1irPIopUvFmPZEFT5isGQnN-blA5ztj592gibu7B-gvND-PV7isq7TUN8WclTY68lwXyO9JGRSTW53RdjmpWfUf1DUad97w6Q4VnNuX69dfPPuIKZ9N0BDreiQiK1va1tUVQIy-QWA0Ooe2Y8SCzdpEQvA/p.png?size=1280x960&size_mode=3';

export function definirImagem(img, setImgAtual) {
  let fetchImg = '';
  switch (img) {
    case 'NLW4':
      fetchImg = pjtNLW4;
      break;
    case 'memoria':
      fetchImg = pjtMemoria;
      break;
    case 'instagram':
      fetchImg = pjtInstagram;
      break;
    case 'netflix':
      fetchImg = pjtNetflix;
      break;
  }

  return fetchImg;
}
