import { useState } from "react";
import TableHeader from "../../components/Header/Header";
import Button from "../../components/Buttons";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextHighlight from "../../components/TextHighlight";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabLabel = (text, isActive = false) => {
    return <span className="px-1">{text}</span>;
  };

  const idIcon = (
    <svg
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.47159 0.363636H0.0113636V12H2.47159V0.363636ZM8.52474 12C12.0702 12 14.2179 9.80682 14.2179 6.17045C14.2179 2.54545 12.0702 0.363636 8.55883 0.363636H4.39974V12H8.52474ZM6.85997 9.89205V2.47159H8.42815C10.61 2.47159 11.7634 3.58523 11.7634 6.17045C11.7634 8.76705 10.61 9.89205 8.42247 9.89205H6.85997Z"
        fill="#6E8BB7"
      />
    </svg>
  );

  const calendarIcon = (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6665 2.49992H14.8332V1.66659C14.8332 1.20825 14.4582 0.833252 13.9998 0.833252C13.5415 0.833252 13.1665 1.20825 13.1665 1.66659V2.49992H4.83317V1.66659C4.83317 1.20825 4.45817 0.833252 3.99984 0.833252C3.5415 0.833252 3.1665 1.20825 3.1665 1.66659V2.49992H2.33317C1.4165 2.49992 0.666504 3.24992 0.666504 4.16658V17.4999C0.666504 18.4166 1.4165 19.1666 2.33317 19.1666H15.6665C16.5832 19.1666 17.3332 18.4166 17.3332 17.4999V4.16658C17.3332 3.24992 16.5832 2.49992 15.6665 2.49992ZM14.8332 17.4999H3.1665C2.70817 17.4999 2.33317 17.1249 2.33317 16.6666V6.66658H15.6665V16.6666C15.6665 17.1249 15.2915 17.4999 14.8332 17.4999Z"
        fill="#6E8BB7"
      />
    </svg>
  );

  const cancelIcon = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99984 0.666748C4.3915 0.666748 0.666504 4.39175 0.666504 9.00008C0.666504 13.6084 4.3915 17.3334 8.99984 17.3334C13.6082 17.3334 17.3332 13.6084 17.3332 9.00008C17.3332 4.39175 13.6082 0.666748 8.99984 0.666748ZM12.5832 12.5834C12.2582 12.9084 11.7332 12.9084 11.4082 12.5834L8.99984 10.1751L6.5915 12.5834C6.2665 12.9084 5.7415 12.9084 5.4165 12.5834C5.0915 12.2584 5.0915 11.7334 5.4165 11.4084L7.82484 9.00008L5.4165 6.59175C5.0915 6.26675 5.0915 5.74175 5.4165 5.41675C5.7415 5.09175 6.2665 5.09175 6.5915 5.41675L8.99984 7.82508L11.4082 5.41675C11.7332 5.09175 12.2582 5.09175 12.5832 5.41675C12.9082 5.74175 12.9082 6.26675 12.5832 6.59175L10.1748 9.00008L12.5832 11.4084C12.8998 11.7251 12.8998 12.2584 12.5832 12.5834Z"
        fill="#F76659"
      />
    </svg>
  );

  const saveIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6583 0.991667C12.3417 0.675 11.9167 0.5 11.475 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V4.525C15.5 4.08333 15.325 3.65833 15.0083 3.35L12.6583 0.991667ZM8 13.8333C6.61667 13.8333 5.5 12.7167 5.5 11.3333C5.5 9.95 6.61667 8.83333 8 8.83333C9.38333 8.83333 10.5 9.95 10.5 11.3333C10.5 12.7167 9.38333 13.8333 8 13.8333ZM8.83333 5.5H3.83333C2.91667 5.5 2.16667 4.75 2.16667 3.83333C2.16667 2.91667 2.91667 2.16667 3.83333 2.16667H8.83333C9.75 2.16667 10.5 2.91667 10.5 3.83333C10.5 4.75 9.75 5.5 8.83333 5.5Z"
        fill="#4094F7"
      />
    </svg>
  );

  return (
    <TableHeader
      left={[
        <Button shape="text" color="secondary" icon={idIcon}>
          537391
        </Button>,
        <Button shape="text" color="secondary" icon={calendarIcon}>
          2021-06-22 18:40:27
        </Button>,
      ]}
      right={[
        <TextHighlight color="green" className="text-sm">
          0:02:36
        </TextHighlight>,
        <TextHighlight color="blue" className="text-sm">
          Доставлен
        </TextHighlight>,
        <Button shape="text" color="error" icon={cancelIcon}>
          Отменить
        </Button>,
        <Button shape="text" color="primary" icon={saveIcon}>
          Сохранить
        </Button>,
      ]}
    >
      <div className="bg-gray-50 h-14 w-full flex items-center font-body">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered={false}
          aria-label="full width tabs example"
          TabIndicatorProps={{ children: <span className="w-2" /> }}
        >
          <Tab
            className="capitalize"
            label={tabLabel("Основное")}
            {...a11yProps(0)}
          />
          <Tab label={tabLabel("История изменений")} {...a11yProps(1)} />
        </Tabs>
      </div>
    </TableHeader>
  );
}

export default App;
