import React from "react";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <img
        className="rounded-full"
        width={50}
        src="https://static.vecteezy.com/system/resources/previews/000/391/163/original/the-word-vegan-in-a-heart-shape-vector.jpg"
        alt="logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
