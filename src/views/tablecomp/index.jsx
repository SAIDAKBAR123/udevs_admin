import Wrapper from "../../components/Template/index";
import TableComp from "../../components/TableComp";

const driversData = [
  {
    name: "Lewis Hamilton",
    country: "England",
    team: "Mercedes AMG",
    dob: "07/01/1985",
  },
  {
    name: "Sebastian Vettel",
    country: "Germany",
    team: "Aston Martin",
    dob: "03/07/1987",
  },
  {
    name: "Charles Leclerc",
    country: "Monaco",
    team: "Ferrari",
    dob: "16/10/1997",
  },
  {
    name: "Max Verstappen",
    country: "Netherlands",
    team: "Red Bull Racing",
    dob: "30/09/1997",
  },
  {
    name: "Daniel Ricciardo",
    country: "Australia",
    team: "Renault",
    dob: "01/07/1989",
  },
];

export default function App() {
  return (
    <Wrapper>
      <TableComp
        title="F1 Tracks"
        headings={["Name", "Country", "Team", "Date of birth"]}
        sourceData={driversData}
        checkboxSelection
      />
    </Wrapper>
  );
}
