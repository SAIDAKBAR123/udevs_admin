import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function TableComp(props) {
  const {
    className,
    title,
    headings,
    sourceData,
    checkboxSelection = false,
    children,
    ...rest
  } = props;

  const [isAllSelected, setIsAllSelected] = useState(false);
  const [isSelected, setIsSelected] = useState(
    new Array(sourceData.length).fill(false)
  );
  const [indeterminate, setIndeterminate] = useState(false);

  const checkAllBoxes = () => {
    // if none checkboxes are selected
    if (
      isSelected.every((item) => {
        return item === false;
      })
    ) {
      setIsSelected(new Array(sourceData.length).fill(true));
      document.getElementById("parentCheckbox").indeterminate = false;

      setIsAllSelected(true);
    }
    // if all checkboxes are selected
    else if (
      isSelected.every((item) => {
        return item === true;
      })
    ) {
      setIsSelected(new Array(sourceData.length).fill(false));
      setIsAllSelected(false);
    }
    // if at least one checkbox is selected
    else if (
      isSelected.some((item) => {
        return item === true;
      })
    ) {
      setIsSelected(new Array(sourceData.length).fill(false));
      document.getElementById("parentCheckbox").indeterminate = false;

      setIsAllSelected(true);
    }
  };

  const checkABox = (input) => {
    const updatedCheckState = isSelected.map((item, index) =>
      index === input ? !item : item
    );

    setIsSelected(updatedCheckState);
    document.getElementById("parentCheckbox").indeterminate = true;
  };

  useEffect(() => {
    if (
      isSelected.some((item) => {
        return item === true;
      })
    ) {
    } else {
      setIsAllSelected(false);
    }
  }, [isSelected]);

  const data = sourceData.map((row, index) => {
    let rowData = [];
    let i = 0;

    for (const key in row) {
      rowData.push({
        key: headings[i],
        val: row[key],
      });
      i++;
    }

    return (
      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
        {checkboxSelection && (
          <td>
            <input
              type="checkbox"
              checked={isSelected[index]}
              onChange={() => checkABox(index)}
            />
          </td>
        )}
        {rowData.map((data, index) => (
          <td
            key={index}
            headers={data.key}
            className="py-4 px-6 text-left whitespace-nowrap"
          >
            {data.val}
          </td>
        ))}
      </tr>
    );
  });

  return (
    <div
      {...rest}
      className={`${className} bg-white border rounded-lg shadow-md rounded my-6`}
    >
      <div className="text-gray-500 text-center font-bold py-4">
        <h2>{title}</h2>
      </div>
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 text-sm text-left">
            {checkboxSelection && (
              <th className="py-3 px-6">
                <input
                  type="checkbox"
                  id="parentCheckbox"
                  checked={isAllSelected}
                  onChange={() => checkAllBoxes()}
                />
              </th>
            )}
            {headings.map((col, index) => (
              <th key={index} className="py-3 px-6">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">{data}</tbody>
      </table>
    </div>
  );
}

TableComp.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.array).isRequired,
  sourceData: PropTypes.arrayOf(PropTypes.array).isRequired,
};
