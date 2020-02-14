export const BASE_URL = "https://graphql.datocms.com/";

export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer fba5190e97e6ec7fa854afa2a1ac99`
};

export const body = JSON.stringify({
  query: `query GetAllCourses {
        allCourses {
          id
          title
          spots
          date
          location
          content
          externalurl
          image {
            alt
            url
          }
        }
      }`
});
