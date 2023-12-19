import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Divider, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { exampleCommand, exampleApiCommand, exampleResetCommand } from "../commands/example";
import MessageIcon from '@mui/icons-material/Message';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import { HOC } from "../../../../common/hoc/types";
import { useExampleSelector } from "../store/storeCreator";

export enum ExampleControlsClasses {
  message = 'message',
  count = 'count',
  controlls = 'controlls',
  stringCommand = 'stringCommand',
  apiCommand = 'apiCommand',
  resetCommand = 'resetCommand',
}

export const Example: HOC = () => {
  const dispatch = useDispatch();
  const message = useExampleSelector((state) => state.example.message);
  const count = useExampleSelector((state) => state.example.count);
  return (
    <Card sx={{maxWidth: '400px'}}>
      <CardMedia
        component="img"
        image="img/teacher.jpeg"
        height="300px"
        alt="Teacher"
      />
      <CardContent>
        <Typography variant="h4">Teacher</Typography>
        <Divider variant="fullWidth" />
        <Box
          paddingTop={'30px'}
          display="flex"
          flexDirection={'column'}
          height="200px"
          justifyContent="space-evenly"
        >
          <Chip
            color="primary"
            avatar={<MessageIcon/>}
            className={ExampleControlsClasses.message}
            label={`The message is ${message}`}
            onDelete={console.log}
          />
          <Chip
            color="secondary"
            avatar={<AlarmAddIcon />}
            className={ExampleControlsClasses.count}
            label={`The count is ${count}`}
          />
        </Box>
      </CardContent>
      
      <CardActions className={ExampleControlsClasses.controlls}>
        <Button
          className={ExampleControlsClasses.stringCommand}
          onClick={() => dispatch(exampleCommand.action('Test message'))}
        >
          Call string command
        </Button>
        <Button
          className={ExampleControlsClasses.apiCommand}
          onClick={() => dispatch(exampleApiCommand.action(42))}
        >
          Call number command
        </Button>
        <Button
          className={ExampleControlsClasses.resetCommand}
          onClick={() => dispatch(exampleResetCommand.action())}
        >
          Call reset command
        </Button>
      </CardActions>
    </Card>
  )
}
