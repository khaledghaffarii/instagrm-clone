import Stories from "./Stories";

function Feed() {
  return (
    <main className="gird grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:max-w-3 xl:grid-cols-3 xl:max-w-6xl max-auto">
      {/* centerSection */}
      <section>
        {/* Stories */}
        <Stories/>
        {/* Posts */}
      </section>

      {/* rightSection */}
      <section>
        {/* miniProfile */}
        {/* suggestions */}
      </section>
    </main>
  );
}

export default Feed;
