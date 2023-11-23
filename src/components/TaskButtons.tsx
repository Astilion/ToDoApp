import Button from "./ui/Button";
import { IconCheck, IconX, IconEdit } from '@tabler/icons-react';

const TaskButtons = () => {
	return (
		<div className='inline-block m-0 p-0'>
			<Button><IconCheck color="green"/></Button>
			<Button><IconEdit/></Button>
			<Button><IconX color="red"/></Button>
		</div>
	);
};

export default TaskButtons;
