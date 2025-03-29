import { apiInitializer } from "discourse/lib/api";
export default apiInitializer("1.8.0", (api) => {
  const user = api.getCurrentUser();
  if (user == null) return;
  api.registerValueTransformer(
    "topic-list-item-class",
    ({ value, context: { topic } }) => {
      if (
        topic?.creator &&
        user.ignored_users.includes(topic.creator.username)
      ) {
        value.push("hidden");
      }
      return value;
    }
  );
});
