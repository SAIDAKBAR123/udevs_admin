import { useState, useEffect } from "react";
import CSelect from "../Select";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const DOTS = "...";

function Pagination({
  children,
  className,
  size = "large",
  type = "simple",
  count = 100,
  pageBound = 5,
  pageCount = 5,
  currentPage = 1,
  ...rest
}) {
  const [isActivePage, setIsActivePage] = useState(currentPage);
  const [upperPageBound, setUpperPageBound] = useState(pageBound);
  const [lowerPageBound, setLowerPageBound] = useState(0);

  const getSize = (theme) => {
    switch (theme) {
      case "large":
        return {
          size: "text-sm",
          width: "88px",
          height: "32px",
          padding: "py-1 px-3",
        };
      case "small":
        return {
          size: "text-xs",
          width: "72px",
          height: "24px",
          padding: "px-2",
        };
    }
  };

  // get the number of pages
  const pages = Math.ceil(count / pageCount);
  const gaps = Math.ceil(pages / (pageBound * 2));

  const btnIncrementClick = () => {
    setUpperPageBound(upperPageBound + pageBound);
    setLowerPageBound(lowerPageBound + pageBound);
    let listId = upperPageBound + 1;
    setIsActivePage(listId);
  };

  const btnDecrementClick = () => {
    setUpperPageBound(upperPageBound - pageBound);
    setLowerPageBound(lowerPageBound - pageBound);
    let listId = upperPageBound - pageBound;
    setIsActivePage(listId);
  };

  const listedItems = [];
  for (let i = 1; i <= pages; i++) {
    listedItems.push(i);
  }
  let pageIncrementBtn = null;
  let pageDecrementBtn = null;

  // DOTS before
  if (lowerPageBound >= 1) {
    pageDecrementBtn = (
      <span
        className="rounded p-2 mx-1 hover:bg-gray-200 cursor-pointer"
        onClick={btnDecrementClick}
      >
        &hellip;
      </span>
    );
  }

  // DOTS after
  if (upperPageBound <= pages) {
    pageIncrementBtn = (
      <span
        className="rounded p-2 mx-1 hover:bg-gray-200 cursor-pointer"
        onClick={btnIncrementClick}
      >
        &hellip;
      </span>
    );
  }

  const handleClick = (event) => {
    let listId = Number(event.target.id);
    setIsActivePage(listId);
  };

  const handleLastItemClick = () => {
    setUpperPageBound(pages + 1);
    setLowerPageBound(pages - pageBound);

    setIsActivePage(pages);
  };

  const handleFirstItemClick = () => {
    setUpperPageBound(pageBound);
    setLowerPageBound(0);

    setIsActivePage(listedItems[0]);
  };

  const renderPageNumbers = listedItems.map((number) => {
    if (number === 1 && isActivePage === 1) {
      return (
        <span
          key={number}
          className={`
          bg-gray-200 rounded p-2 mx-1 hover:bg-gray-200 cursor-pointer`}
          id={number}
          onClick={handleClick}
        >
          {number}
        </span>
      );
    } else if (number < upperPageBound + 1 && number > lowerPageBound) {
      return (
        <span
          className={`${
            isActivePage === number && "bg-gray-200"
          } rounded p-2 mx-1 hover:bg-gray-200 cursor-pointer`}
          key={number}
          id={number}
          onClick={handleClick}
        >
          {number}
        </span>
      );
    }
  });

  // go to previous page
  const goToPrevPage = () => {
    if (isActivePage !== 1) {
      if ((isActivePage - 1) % pageBound === 0) {
        setUpperPageBound((prev) => prev - pageBound);
        setLowerPageBound((prev) => prev - pageBound);
      }
      let listId = isActivePage - 1;
      setIsActivePage(listId);
    }
  };

  // go to next page
  const goToNextPage = () => {
    if (isActivePage !== pages) {
      if (isActivePage + 1 > upperPageBound) {
        setUpperPageBound((prev) => prev + pageBound);
        setLowerPageBound((prev) => prev + pageBound);
      }
      let listId = isActivePage + 1;
      setIsActivePage(listId);
    }
  };

  return type === "complex" ? (
    <div {...rest} className={`${className} flex flex-col w-full space-y-3`}>
      <div className="flex border-t w-full"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <CSelect
            placeholder={`${pageCount}`}
            width={getSize(size).width}
            height={getSize(size).height}
          />
          <h5 className="text-sm">Items per page</h5>
        </div>
        <div className="flex">
          <h5 className="text-sm font-bold">
            1 – {pageCount} of {count} items
          </h5>
        </div>
        <div className="flex items-center space-x-3">
          <CSelect
            placeholder={`${currentPage}`}
            width={getSize(size).width}
            height={getSize(size).height}
          />

          <h5 className="text-sm">of {pages} pages</h5>
          <span
            className={`border-2 rounded cursor-pointer hover:border-blue-400 ${
              getSize(size).padding
            }`}
          >
            <ArrowBackIcon style={{ fontSize: "14px" }} />
          </span>
          <span
            className={`border-2 rounded cursor-pointer hover:border-blue-400 ${
              getSize(size).padding
            }`}
          >
            <ArrowForward style={{ fontSize: "14px" }} />
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div {...rest} className={`${className} flex w-full justify-center`}>
      <div className={`flex items-center ${getSize(size).size}`}>
        <span
          className={`${
            isActivePage === 1 && "cursor-not-allowed"
          } rounded py-2 px-1 hover:bg-gray-200 cursor-pointer`}
          onClick={goToPrevPage}
        >
          <ArrowBackIosIcon style={{ fontSize: "13px" }} />
        </span>

        <div className="flex items-center">
          {pageDecrementBtn && (
            <span
              key={listedItems[0]}
              className={`${
                isActivePage === listedItems[0] && "bg-gray-200"
              } rounded p-2 mx-1 hover:bg-gray-200 cursor-pointer`}
              id={listedItems[0]}
              onClick={handleFirstItemClick}
            >
              {listedItems[0]}
            </span>
          )}
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          {pageIncrementBtn && (
            <span
              key={pages}
              className={`${
                isActivePage === pages && "bg-gray-200"
              } rounded p-2 mx-1 hover:bg-gray-200 cursor-pointer`}
              id={pages}
              onClick={handleLastItemClick}
            >
              {pages}
            </span>
          )}
        </div>

        <span
          className={`${
            isActivePage === pages && "cursor-not-allowed"
          } rounded py-2 px-1 hover:bg-gray-200 cursor-pointer`}
          onClick={goToNextPage}
        >
          <ArrowForwardIosIcon style={{ fontSize: "13px" }} />
        </span>
      </div>
    </div>
  );
}

export default Pagination;
