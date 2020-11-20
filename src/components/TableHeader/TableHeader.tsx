import React from "react";
import useTypedSelector from "../../hooks/useTypedSelector";
import TableCell from "../TableCell";
import TableSortToggle from "../TableSortToggle";

export default function TableHeader() {
  const { secondaryColor } = useTypedSelector((state) => state.theme);
  return (
    <thead>
      <tr style={{ borderBottom: `1px solid ${secondaryColor}` }}>
        <TableCell type={`flag`}>Flag</TableCell>
        <TableCell type={`name`}>
          Name <TableSortToggle type={"name"} />
        </TableCell>
        <TableCell type={`population`}>
          Population <TableSortToggle type={"population"} />
        </TableCell>
        <TableCell type={`languages`}>Languages</TableCell>
        <TableCell type={`region`}>
          Region <TableSortToggle type={"region"} />
        </TableCell>
        <TableCell type={"card"}>Card</TableCell>
      </tr>
    </thead>
  );
}
