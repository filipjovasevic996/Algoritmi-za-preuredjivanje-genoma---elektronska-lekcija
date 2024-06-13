import { useState, Dispatch, SetStateAction } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import SortingByReversals from "../SortingByReversals";
import Uvod from "../Uvod";
import Genetika from "../Genetika";
import PreuredjivanjeGenoma from "../PreuredjivanjeGenoma";
import BlokoviSintenije from "../BlokoviSintenije";
import IteracijskoPreuredjivanje from "../IteracijskoPreuredjivanje/IteracijskoPreuredjivanje";
import ZaristaLomova from "../ZaristaLomova";
import PohlepnaHeuristika from "../PohlepnaHeuristika";
import TackePrekida from "../TackePrekida";
import MultihromozomalniGenomi from "components/MultihormoyomalniGenomi/MultihromozomalniGenomi";

interface TabPanelProps {
  index: number;
  value: number;
  subTab: number;
  setSubTab: Dispatch<SetStateAction<number>>;
  subsections: { [key: string]: string }[] | {}[];
}

function CustomTabPanel(props: TabPanelProps) {
  const { value, index, subTab, setSubTab, subsections } = props;

  const podnaslovi = subsections.map((subsection) => Object.keys(subsection));
  const tekstovi = subsections.map((subesction) => Object.values(subesction));

  return (
    <>
      {value === index && (
        <>
          <Tabs
            value={subTab}
            hidden={value !== index}
            onChange={(_, newTab) => {
              setSubTab(newTab);
              window.scrollTo(0, 0);
            }}
            aria-label="sub-sections"
            style={{
              position: "fixed",
              width: "100%",
              zIndex: "2",
              background: "white",
            }}
          >
            {podnaslovi.map((subsection, index) => (
              <Tab
                key={index}
                label={subsection}
                id={`sub-section-${index}`}
                aria-controls={`sub-section-${index}`}
              />
            ))}
          </Tabs>
          {tekstovi.map((tekst, index) => (
            <div
              key={index}
              role="tabpanel"
              id={`section-${index}`}
              aria-labelledby={`section-${index}`}
              style={{
                margin: "40px 40px 0px",
                zIndex: "1",
                lineHeight: "40px",
                fontFamily: "Times New Roman, Times, serif",
                fontSize: "20px",
              }}
            >
              {subTab === index && <Box sx={{ p: 3 }}>{tekst}</Box>}
            </div>
          ))}
        </>
      )}
    </>
  );
}

const HomePage: React.FC = () => {
  const [tab, setTab] = useState(0);
  const [subTab, setSubTab] = useState(0);
  const sectionNames = [
    "Naslovna",
    "Definicije",
    "Miš ili čovek?",
    "Preuređivanje",
  ];
  const contents = [
    [
      {
        Uvod: <Uvod />,
      },
    ],
    [
      {
        Genetika: <Genetika />,
      },
      { "Preuređivanje genoma": <PreuredjivanjeGenoma /> },
      { "Blokovi sintenije i tačke prekida sintenije": <BlokoviSintenije /> },
    ],
    [
      { Poredjenje: <IteracijskoPreuredjivanje /> },
      { "Žarišta lomova": <ZaristaLomova /> },
    ],
    [
      { "Sortiranje po preokretima": <SortingByReversals /> },
      { "Pohlepna heuristika": <PohlepnaHeuristika /> },
      { "Tačke prekida": <TackePrekida /> },
      { "Translokacija, fuzija, fisija": <MultihromozomalniGenomi /> },
    ],
  ];

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid
          item
          xs={2}
          style={{ position: "fixed", height: "100%", width: "200px" }}
        >
          <Tabs
            orientation="vertical"
            value={tab}
            onChange={(_, newTab) => {
              setTab(newTab);
              setSubTab(0);
              window.scrollTo(0, 0);
            }}
            aria-label="sections"
            sx={{ height: "100%" }}
          >
            {sectionNames.map((sectionName, index) => (
              <Tab
                key={index}
                label={sectionName}
                id={`section-${index}`}
                aria-controls={`section-${index}`}
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item xs={10} style={{ marginLeft: "210px" }}>
          {contents.map((content, index) => {
            return (
              <CustomTabPanel
                key={index}
                value={tab}
                index={index}
                subTab={subTab}
                setSubTab={setSubTab}
                subsections={content}
              />
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
