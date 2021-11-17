import Stories from "./Stories";
import Posts from './Posts';

function Feed() {
  return (
    <main className="gird grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:max-w-3 xl:grid-cols-3 xl:max-w-4xl mx-auto">
      {/* centerSection */}
      <section className="col-span-2">
        {/* Stories */}
        <Stories/>
        {/* Posts */}
        <Posts/>
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
