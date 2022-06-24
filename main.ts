import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "Manuel's blog",
  description: "This is my new blog.",
  coverStyle: "avatar-rounded",
  author: "Manuel Alférez",
  avatar:
    "https://ik.imagekit.io/manuelalferez/deno_blog/bear_7YgaFSXvGo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656061115240",
  background: "#f9f9f9",
  links: [
    { title: "Email", url: "mailto:manuelalferezruiz@gmail.com" },
    { title: "GitHub", url: "https://github.com/manuelalferez" },
    { title: "Twitter", url: "https://twitter.com/manuelalferez" },
  ],
  middlewares: [
    ga("UA-XXXXXXXX-X"),
    redirects({
      "/foo": "/my_post",
      // you can skip leading slashes too
      bar: "my_post2",
    }),
  ],
  // If you want to set up Google Analytics, paste your GA key here.
  // ga("UA-XXXXXXXX-X"),

  // If you want to provide some redirections, you can specify them here,
  // pathname specified in a key will redirect to pathname in the value.
  // redirects({
  //  "/hello_world.html": "/hello_world",
  // }),

  // ]
});
