exports.createPages = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions;

  createPage({
    path: "/",
    component: require.resolve("./src/index.jsx"),
  })

}