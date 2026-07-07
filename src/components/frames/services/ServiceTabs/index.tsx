import { useState } from "react";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";

import { defaultTheme } from "../../../../styles/default";

interface SubService {
  title: string;
  description: string;
  details: string;
}

interface ServiceTabsProps {
  accentColor: string;
  services: SubService[];
}

export function ServiceTabs({ accentColor, services }: ServiceTabsProps) {
  const [selectedTab, setSelectedTab] = useState(0);
  const selectedService = services[selectedTab];

  return (
    <Box>
      <Box
        sx={{
          borderBottom: `1px solid ${defaultTheme["gray-100"]}`,
          mb: 3,
          "& .MuiTabs-indicator": {
            bgcolor: accentColor,
            height: 4,
            borderRadius: 4,
          },
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={(_, newValue) => setSelectedTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            minHeight: 52,
            "& .MuiTab-root": {
              minHeight: 52,
              color: defaultTheme["gray-500"],
              fontWeight: 800,
            },
            "& .MuiTab-root.Mui-selected": {
              color: defaultTheme["blue-700"],
            },
          }}
        >
          {services.map((service) => (
            <Tab key={service.title} label={service.title} />
          ))}
        </Tabs>
      </Box>

      <Box
        sx={{
          border: `1px solid ${defaultTheme["gray-100"]}`,
          borderLeft: `6px solid ${accentColor}`,
          borderRadius: 2,
          p: { xs: 2.5, md: 3 },
          bgcolor: defaultTheme["gray-50"],
        }}
      >
        <Stack spacing={1.5}>
          <Typography
            variant="h5"
            sx={{
              color: defaultTheme["blue-700"],
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          >
            {selectedService.title}
          </Typography>
          <Typography
            sx={{
              color: accentColor,
              fontWeight: 800,
              fontSize: "0.98rem",
            }}
          >
            {selectedService.description}
          </Typography>
          <Typography
            sx={{
              color: defaultTheme["gray-600"],
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: 940,
            }}
          >
            {selectedService.details}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
