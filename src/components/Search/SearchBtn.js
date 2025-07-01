import { Box } from "@mui/material";
import SearchIcon from "../../assets/SearchIcon.svg";

export default function SearchBtn(props) {
  const { color, onClick } = props;
  return (
    <Box
      sx={{
        backgroundColor: color,
        padding: "15px",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Box component="img" src={SearchIcon} width="30px" />
    </Box>
  );
}
