import Button from "../../components/Buttons/index";
import Wrapper from "../../components/Template/index.jsx";
import FolderIcon from "@material-ui/icons/Folder";

const folder = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H11L13 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V16C20 16.5304 19.7893 17.0391 19.4142 17.4142C19.0391 17.7893 18.5304 18 18 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V8Z" />
  </svg>
);

export default function App() {
  return (
    <Wrapper header="Button list" className="font-body">
      <h2>Filled</h2>

      <div className="w-2/4 flex justify-start space-x-2 items-center">
        <div className="mr-10">Small</div>
        <div className="">
          <Button disabled onClick={(e) => alert()} icon={folder} size="small">
            Disabled
          </Button>
        </div>
        <div className="">
          <Button
            icon={<FolderIcon fontSize="small" />}
            color="secondary"
            size="small"
          >
            Default
          </Button>
        </div>
        <div className="">
          <Button size="small" color="yellow">
            Default
          </Button>
        </div>
      </div>
      <div className="w-2/4 flex justify-start space-x-2 items-center mt-4">
        <div className="mr-10">Medium</div>
        <div className="">
          <Button icon={<FolderIcon fontSize="medium" />}>Default</Button>
        </div>
        <div className="">
          <Button icon={<FolderIcon fontSize="medium" />} color="success">
            Default
          </Button>
        </div>
        <div className="">
          <Button color="error">Default</Button>
        </div>
      </div>
      <div className="w-2/4 flex justify-start space-x-2 items-center mt-4">
        <div className="mr-10">Large</div>
        <div className="">
          <Button icon={<FolderIcon fontSize="medium" />} size="large">
            Default
          </Button>
        </div>
        <div className="">
          <Button
            icon={<FolderIcon fontSize="medium" />}
            color="success"
            size="large"
          >
            Default
          </Button>
        </div>
        <div className="">
          <Button size="large" color="error">
            Default
          </Button>
        </div>
      </div>
      <hr className="my-10"></hr>
      <h2>Outlined</h2>
      <div className="w-2/4 flex justify-start space-x-2 items-center">
        <div className="mr-10">Small</div>
        <div className="">
          <Button
            disabled
            shape="outlined"
            onClick={(e) => alert()}
            icon={<FolderIcon />}
            size="small"
          >
            Default
          </Button>
        </div>
        <div className="">
          <Button
            shape="outlined"
            icon={<FolderIcon fontSize="small" />}
            size="small"
            color="success"
          >
            Default
          </Button>
        </div>
        <div className="">
          <Button shape="outlined" size="small" color="error">
            Default
          </Button>
        </div>
      </div>
      <div className="w-2/4 flex justify-start space-x-2 items-center mt-4">
        <div className="mr-10">Medium</div>
        <div className="">
          <Button shape="outlined" icon={<FolderIcon fontSize="medium" />}>
            Default
          </Button>
        </div>
        <div className="">
          <Button
            shape="outlined"
            icon={<FolderIcon fontSize="medium" />}
            color="success"
          >
            Default
          </Button>
        </div>
        <div className="">
          <Button shape="outlined" color="error">
            Default
          </Button>
        </div>
      </div>
      <div className="w-2/4 flex justify-start space-x-2 items-center mt-4">
        <div className="mr-10">Large</div>
        <div className="">
          <Button
            shape="outlined"
            icon={<FolderIcon fontSize="medium" />}
            size="large"
          >
            Default
          </Button>
        </div>
        <div className="">
          <Button
            shape="outlined"
            icon={<FolderIcon fontSize="medium" />}
            size="large"
            color="success"
          >
            Default
          </Button>
        </div>
        <div className="">
          <Button shape="outlined" size="large" color="error">
            Default
          </Button>
        </div>
      </div>
      <hr className="my-10"></hr>
      <h2>Text</h2>
      <div className="w-2/4 flex justify-start space-x-2 items-center">
        <div className="mr-10">Small</div>
        <div className="">
          <Button
            disabled
            shape="text"
            onClick={(e) => alert()}
            icon={<FolderIcon fontSize="small" />}
            size="small"
          >
            Disabled
          </Button>
        </div>
        <div className="">
          <Button
            shape="text"
            icon={<FolderIcon fontSize="small" />}
            size="small"
            color="success"
          >
            Default
          </Button>
        </div>
        <div className="">
          <Button shape="text" size="small" color="error">
            Default
          </Button>
        </div>
      </div>
      <div className="w-2/4 flex justify-start space-x-2 items-center mt-4">
        <div className="mr-10">Medium</div>
        <div className="">
          <Button shape="text" icon={<FolderIcon fontSize="medium" />}>
            Default
          </Button>
        </div>
        <div className="">
          <Button
            shape="text"
            icon={<FolderIcon fontSize="medium" />}
            color="success"
          >
            Default
          </Button>
        </div>
        <div className="">
          <Button shape="text" color="error">
            Default
          </Button>
        </div>
      </div>
      <div className="w-2/4 flex justify-start space-x-2 items-center mt-4">
        <div className="mr-10">Large</div>
        <div className="">
          <Button
            shape="text"
            icon={<FolderIcon fontSize="medium" />}
            size="large"
          >
            Default
          </Button>
        </div>
        <div className="">
          <Button
            shape="text"
            icon={<FolderIcon fontSize="medium" />}
            size="large"
            color="success"
          >
            Large
          </Button>
        </div>
        <div className="">
          <Button shape="text" size="large" color="error">
            Large
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
