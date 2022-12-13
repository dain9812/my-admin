import * as React from "react";
import { useCallback, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List, ListItem, ListItemText, Collapse } from "@mui/material";
import { useTranslate, useSidebarState } from "react-admin";

export const SubMenu = (props: SubMenuProps) => {
  const {
    isDropdownOpen = false,
    primaryText,
    leftIcon,
    children,
    ...rest
  } = props;
  const translate = useTranslate();
  const [open] = useSidebarState();
  const [isOpen, setIsOpen] = useState(isDropdownOpen);

  const handleToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <React.Fragment>
      <ListItem
        dense
        button
        onClick={handleToggle}
        sx={{
          paddingLeft: "1rem",
          color: "rgba(0, 0, 0, 0.54)",
        }}
      >
        {leftIcon}
        <ListItemText
          inset
          disableTypography
          primary={translate(primaryText as string)}
          sx={{
            paddingLeft: 2,
            fontSize: "1rem",
            color: "rgba(0, 0, 0, 0.6)",
          }}
        />
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {open ? (
          <List
            component="div"
            disablePadding
            sx={
              open
                ? {
                    paddingLeft: "25px",
                    transition:
                      "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
                  }
                : {
                    paddingLeft: 0,
                    transition:
                      "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
                  }
            }
          >
            {children}
          </List>
        ) : (
          ""
        )}
      </Collapse>
    </React.Fragment>
  );
};

export type SubMenuProps = {
  children?: React.ReactNode;
  isDropdownOpen?: boolean;
  leftIcon?: React.ReactElement;
  primaryText?: string;
};

export default SubMenu;
