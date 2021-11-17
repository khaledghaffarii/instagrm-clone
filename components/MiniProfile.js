function MiniProfile() {
    return (
      <div className="flex items-center justify-between mt-14 ml-10">
        <img
          className="w-16 h-16 rounded-full border p-[2px] mt-14 ml-10"
          src="https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-1/p160x160/249282159_2680092105634057_110424453229605424_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=j9nDiFqILTIAX_HsLM7&_nc_ht=scontent.ftun6-1.fna&oh=b416e5fc869692b400e3eb72127a5219&oe=619849F6"
          alt=""
        />
        <div className="flex-1 mx-4 mt-14">
            <h2 className="font-bold">khaledghaffarii</h2>
            <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
        </div>
        <button className="text-blue-400 text-sm font-semibold mt-14 ml-14"> Sign Out</button>
      </div>
    );
}

export default MiniProfile
