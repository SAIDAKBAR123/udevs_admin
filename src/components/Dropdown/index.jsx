import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import Button from "../Buttons/index";
import { searchIcon } from "../Header/Header.jsx";
import Input from "../Input/index";
import CustomDropdown from "./CustomDropdown";

const plusIcon = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.0003 6.83335H6.83366V11C6.83366 11.4584 6.45866 11.8334 6.00033 11.8334C5.54199 11.8334 5.16699 11.4584 5.16699 11V6.83335H1.00033C0.541992 6.83335 0.166992 6.45835 0.166992 6.00002C0.166992 5.54169 0.541992 5.16669 1.00033 5.16669H5.16699V1.00002C5.16699 0.541687 5.54199 0.166687 6.00033 0.166687C6.45866 0.166687 6.83366 0.541687 6.83366 1.00002V5.16669H11.0003C11.4587 5.16669 11.8337 5.54169 11.8337 6.00002C11.8337 6.45835 11.4587 6.83335 11.0003 6.83335Z"
      fill="white"
    />
  </svg>
);

const ArrowIcon = (
  <svg
    width="6"
    height="10"
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.741797 8.23332L3.97513 4.99998L0.741797 1.76665C0.416797 1.44165 0.416797 0.91665 0.741797 0.59165C1.0668 0.26665 1.5918 0.26665 1.9168 0.59165L5.7418 4.41665C6.0668 4.74165 6.0668 5.26665 5.7418 5.59165L1.9168 9.41665C1.5918 9.74165 1.0668 9.74165 0.741797 9.41665C0.42513 9.09165 0.416797 8.55832 0.741797 8.23332Z"
      fill="#4094F7"
    />
  </svg>
);

const crossIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="6" fill="#F76659" fill-opacity="0.15" />
    <path
      d="M20.2 11.8066C19.94 11.5466 19.52 11.5466 19.26 11.8066L16 15.06L12.74 11.8C12.48 11.54 12.06 11.54 11.8 11.8C11.54 12.06 11.54 12.48 11.8 12.74L15.06 16L11.8 19.26C11.54 19.52 11.54 19.94 11.8 20.2C12.06 20.46 12.48 20.46 12.74 20.2L16 16.94L19.26 20.2C19.52 20.46 19.94 20.46 20.2 20.2C20.46 19.94 20.46 19.52 20.2 19.26L16.94 16L20.2 12.74C20.4533 12.4866 20.4533 12.06 20.2 11.8066Z"
      fill="#F76659"
    />
  </svg>
);

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    padding: "5px",
    width: 564,
    minHeight: 144,
    overflow: "none",
    marginTop: "14px",
    borderRadius: 6,
    boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)`,
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledPropMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    padding: "7px 10px",
    width: 300,
    height: 200,
    fontSize: "12px",
    fontFamily: "Inter",
    marginTop: "14px",
    borderRadius: 6,
    boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12)`,
  },
})((props) => (
  <Menu
    className="scroll_menu_list"
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dropList, setDropList] = React.useState(null);
  //   const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const listRender = [
    {
      title: "???",
    },
    {
      title: "????????????",
    },
    {
      title: "????.????????????",
    },
    {
      title: "????????????",
    },
    {
      title: "????????????",
    },
    {
      title: "????????????",
    },
    {
      title: "?????? ????????????????",
    },
    {
      title: "???????? ????????????",
    },
  ];

  return (
    <div>
      <div onClick={handleClick}>{props.children}</div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        className="shadow-lg"
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <div className="grid grid-cols-9 rounded w-full h-auto  px-2 gap-2">
          <div className="col-span-3">
            <CustomDropdown placeholder="?????? ????????????????" size="large" />
          </div>
          <div className="col-span-2">
            <CustomDropdown placeholder="is" disabled size="large" />
          </div>
          <div className="col-span-3">
            <CustomDropdown placeholder="??????????????????" size="large" />
          </div>
          <div className="my-auto cursor-pointer">{crossIcon}</div>
        </div>
        <div className="m-2 h-full flex items-end">
          <Button
            icon={plusIcon}
            onClick={(e) => setDropList(e.currentTarget)}
            size="large"
            color="green-500"
          >
            ???????????????? ????????????
          </Button>
          <StyledPropMenu
            id="customized-menu"
            anchorEl={dropList}
            keepMounted
            className="shadow-lg"
            open={Boolean(dropList)}
            onClose={() => setDropList(null)}
          >
            <div className="mx-1 mb-2 divide-x">
              <Input
                className="px-2 py-1"
                icon={searchIcon}
                placeholder="??????????..."
              ></Input>
            </div>
            <hr />
            <div className="flex flex-col divide-y font-body text-sm">
              {listRender.map((el) => (
                <div className="flex w-full cursor-pointer py-3 justify-between px-2">
                  <div>{el.title}</div>
                  <div>{ArrowIcon}</div>
                </div>
              ))}
            </div>
          </StyledPropMenu>
        </div>
      </StyledMenu>
    </div>
  );
}
