import Button from "../../components/Buttons/index";
import Wrapper from "../../components/Template/index.jsx";
import FolderIcon from "@material-ui/icons/Folder";

export default function App() {
  return (
    <Wrapper header="Button list" className="font-body">
      <h2>Filled</h2>

      <div className="w-2/4 flex space-x-2 mt-4">
        <div className="mr-10">Small</div>
        <div className="">
          <Button
            disabled
            onClick={(e) => alert()}
            icon={FolderIcon}
            size="small"
          >
            Disabled
          </Button>
        </div>
        <div className="">
          <Button icon={FolderIcon} color="secondary" size="small">
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
          <Button icon={FolderIcon}>Default</Button>
        </div>
        <div className="">
          <Button icon={FolderIcon} color="success">
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
          <Button icon={FolderIcon} size="large">
            Default
          </Button>
        </div>
        <div className="">
          <Button icon={FolderIcon} color="success" size="large">
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
      <div className="w-2/4 flex justify-start space-x-2 items-center mt-4">
        <div className="mr-10">Small</div>
        <div className="">
          <Button
            disabled
            shape="outlined"
            onClick={(e) => alert()}
            icon={FolderIcon}
            size="small"
          >
            Default
          </Button>
        </div>
        <div className="">
          <Button
            shape="outlined"
            icon={FolderIcon}
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
          <Button shape="outlined" icon={FolderIcon}>
            Default
          </Button>
        </div>
        <div className="">
          <Button shape="outlined" icon={FolderIcon} color="success">
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
          <Button shape="outlined" icon={FolderIcon} size="large">
            Default
          </Button>
        </div>
        <div className="">
          <Button
            shape="outlined"
            icon={FolderIcon}
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
      <div className="w-2/4 flex justify-start space-x-2 items-center mt-4">
        <div className="mr-10">Small</div>
        <div className="">
          <Button
            disabled
            shape="text"
            onClick={(e) => alert()}
            icon={FolderIcon}
            size="small"
          >
            Disabled
          </Button>
        </div>
        <div className="">
          <Button shape="text" icon={FolderIcon} size="small" color="success">
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
          <Button shape="text" icon={FolderIcon}>
            Default
          </Button>
        </div>
        <div className="">
          <Button shape="text" icon={FolderIcon} color="success">
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
          <Button shape="text" icon={FolderIcon} size="large">
            Default
          </Button>
        </div>
        <div className="">
          <Button shape="text" icon={FolderIcon} size="large" color="success">
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
