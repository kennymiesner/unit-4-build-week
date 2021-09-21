exports.seed = async function (knex) {
  await knex("users").del();
  await knex("items").del();

  await knex("users").insert([
    {
      user_email: "abc@gmail.com",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq", // password "1234"
      role_name: "owner",
    },
    {
      user_email: "xyz@gmail.com",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq", // password "1234"
      role_name: "customer",
    },
  ]);
  await knex("items").insert([
    {
      location: "Sunset Market, Cape Town",
      item_name: "Black beans",
      description: "New crop black beans, medium size.",
      price: "2.99",
      unit: "lb",
      user_id: "1",
    },
    {
      location: "Waterfall Market, Durban",
      item_name: "Lemons",
      description: "Small size.",
      price: "1.99",
      unit: "lb",
      user_id: "1",
    },
  ]);
};
