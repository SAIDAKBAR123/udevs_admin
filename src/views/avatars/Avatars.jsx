import Avatar from "../../components/Avatar/Index"
import Wrapper from "../../components/Template/index"
import Badge from "../../components/Badge/Index"

export default function Avatars () {
  return (
    <Wrapper>

      <div className="bg-white h-full rounded">
        <div className="flex">
          <div className="w-1/3 p-2">
            <h2>Circle</h2>
            <Avatar
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar className="ml-1">WW</Avatar>
            <Avatar className="ml-1" weight="subtle">W</Avatar>
            <Badge overlap='circle'  className="ml-1" badgeContent={8}>
              <Avatar>WW</Avatar>
            </Badge>
            <Badge overlap='circle'  className="ml-1" badgeContent={15} max={10}>
              <Avatar>WW</Avatar>
            </Badge>
            <Badge overlap='circle'  className="ml-1">
              <Avatar>WW</Avatar>
            </Badge>
            <Badge overlap='circle'  className="ml-1" anchorOrigin={{y: 'bottom', x: 'right'}} color="green">
              <Avatar>WW</Avatar>
            </Badge>
            <Badge overlap='circle'  className="ml-1" anchorOrigin={{y: 'top', x: 'left'}} color="yellow">
              <Avatar>WW</Avatar>
            </Badge>
            <Badge overlap='circle'  className="ml-1" anchorOrigin={{y: 'bottom', x: 'left'}} color="blue">
              <Avatar>WW</Avatar>
            </Badge>
          </div>

          <div className="w-1/3 p-2">
            <h2>Rounded</h2>
            <Avatar variant="rounded"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar className="ml-2" variant="rounded">WW</Avatar>
            <Avatar className="ml-2" variant="rounded" weight="subtle">W</Avatar>
            <Badge overlap='square' className="ml-2" badgeContent={8}>
              <Avatar variant="rounded">WW</Avatar>
            </Badge>
            <Badge overlap='square' className="ml-2" badgeContent={15} max={10}>
              <Avatar variant="rounded">WW</Avatar>
            </Badge>
            <Badge overlap='square' className="ml-2">
              <Avatar variant="rounded">WW</Avatar>
            </Badge>
            <Badge overlap='square' className="ml-2" anchorOrigin={{y: 'bottom', x: 'right'}} color="green">
              <Avatar variant="rounded">WW</Avatar>
            </Badge>
            <Badge overlap='square' className="ml-2" anchorOrigin={{y: 'top', x: 'left'}} color="yellow">
              <Avatar variant="rounded">WW</Avatar>
            </Badge>
            <Badge overlap='square' className="ml-2" anchorOrigin={{y: 'bottom', x: 'left'}} color="blue">
              <Avatar variant="rounded">WW</Avatar>
            </Badge>
          </div>

          <div className="w-1/3 p-2">
            <h2>Square</h2>
            <Avatar variant="square"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar className="ml-2" variant="square">WW</Avatar>
            <Avatar className="ml-2" variant="square" weight="subtle">W</Avatar>
            <Badge overlap='square' className="ml-2" badgeContent={8}>
              <Avatar variant="square">WW</Avatar>
            </Badge>
            <Badge overlap='square' className="ml-2" badgeContent={15} max={10}>
              <Avatar variant="square">WW</Avatar>
            </Badge>
            <Badge overlap='square' className="ml-2">
              <Avatar variant="square">WW</Avatar>
            </Badge>
            <Badge overlap='square' className="ml-2" anchorOrigin={{y: 'bottom', x: 'right'}} color="green">
              <Avatar variant="square">WW</Avatar>
            </Badge>
            <Badge overlap='square' className="ml-2" anchorOrigin={{y: 'top', x: 'left'}} color="yellow">
              <Avatar variant="square">WW</Avatar>
            </Badge>
            <Badge overlap='square' className="ml-2" anchorOrigin={{y: 'bottom', x: 'left'}} color="blue">
              <Avatar variant="square">WW</Avatar>
            </Badge>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 p-2">
            <Avatar
              size="xl"
              className="ml-1"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar
              size="lg"
              className="ml-1"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar
              className="ml-1"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar
              size="sm"
              className="ml-1"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar
              size={16}
              className="ml-1"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
          </div>

          <div className="w-1/3 p-2">
            <Avatar
              variant="rounded"
              size="xl"
              className="ml-1"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar
              variant="rounded"
              size="lg"
              className="ml-1"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar
              className="ml-1"
              variant="rounded"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar
              variant="rounded"
              size="sm"
              className="ml-1"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar
              variant="rounded"
              size={16}
              className="ml-1"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
          </div>

          <div className="w-1/3 p-2">
            <Avatar
              variant="square"
              size="xl"
              className="ml-1"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar
              variant="square"
              size="lg"
              className="ml-1"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar
              className="ml-1"
              variant="square"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar
              variant="square"
              size="sm"
              className="ml-1"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
            <Avatar
              variant="square"
              size={16}
              className="ml-1"
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            >N</Avatar>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 p-2">
            <Avatar size="xl" className="ml-1" weight="filled">WW</Avatar>
            <Avatar size="lg" className="ml-1" weight="filled">WW</Avatar>
            <Avatar className="ml-1" weight="filled">WW</Avatar>
            <Avatar size="sm" className="ml-1" weight="filled">WW</Avatar>
            <Avatar size={16} className="ml-1" weight="filled">WW</Avatar>
          </div>

          <div className="w-1/3 p-2">
            <Avatar size="xl" className="ml-1" weight="filled" variant="rounded">WW</Avatar>
            <Avatar size="lg" className="ml-1" weight="filled" variant="rounded">WW</Avatar>
            <Avatar className="ml-1" weight="filled" variant="rounded">WW</Avatar>
            <Avatar size="sm" className="ml-1" weight="filled" variant="rounded">WW</Avatar>
            <Avatar size={16} className="ml-1" weight="filled" variant="rounded">WW</Avatar>
          </div>

          <div className="w-1/3 p-2">
            <Avatar size="xl" className="ml-1" weight="filled" variant="square">WW</Avatar>
            <Avatar size="lg" className="ml-1" weight="filled" variant="square">WW</Avatar>
            <Avatar className="ml-1" weight="filled" variant="square">WW</Avatar>
            <Avatar size="sm" className="ml-1" weight="filled" variant="square">WW</Avatar>
            <Avatar size={16} className="ml-1" weight="filled" variant="square">WW</Avatar>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 p-2">
            <Avatar className="ml-1" color="green" weight={50}>WW</Avatar>
            <Avatar className="ml-1" color="green" weight={100}>WW</Avatar>
            <Avatar className="ml-1" color="green" weight={200}>WW</Avatar>
            <Avatar className="ml-1" color="green" weight={300}>WW</Avatar>
            <Avatar className="ml-1" color="green" weight={400}>WW</Avatar>
            <Avatar className="ml-1" color="green" weight={500}>WW</Avatar>
            <Avatar className="ml-1" color="green" weight={600}>WW</Avatar>
            <Avatar className="ml-1" color="green" weight={700}>WW</Avatar>
            <Avatar className="ml-1" color="green" weight={800}>WW</Avatar>
            <Avatar className="ml-1" color="green" weight={900}>WW</Avatar>
          </div>

          <div className="w-1/3 p-2">
            <Avatar className="ml-1" variant="rounded" color="red" weight={50}>WW</Avatar>
            <Avatar className="ml-1" variant="rounded" color="red" weight={100}>WW</Avatar>
            <Avatar className="ml-1" variant="rounded" color="red" weight={200}>WW</Avatar>
            <Avatar className="ml-1" variant="rounded" color="red" weight={300}>WW</Avatar>
            <Avatar className="ml-1" variant="rounded" color="red" weight={400}>WW</Avatar>
            <Avatar className="ml-1" variant="rounded" color="red" weight={500}>WW</Avatar>
            <Avatar className="ml-1" variant="rounded" color="red" weight={600}>WW</Avatar>
            <Avatar className="ml-1" variant="rounded" color="red" weight={700}>WW</Avatar>
            <Avatar className="ml-1" variant="rounded" color="red" weight={800}>WW</Avatar>
            <Avatar className="ml-1" variant="rounded" color="red" weight={900}>WW</Avatar>
          </div>

          <div className="w-1/3 p-2">
            <Avatar className="ml-1" variant="square" color="blue" weight={50}>WW</Avatar>
            <Avatar className="ml-1" variant="square" color="blue" weight={100}>WW</Avatar>
            <Avatar className="ml-1" variant="square" color="blue" weight={200}>WW</Avatar>
            <Avatar className="ml-1" variant="square" color="blue" weight={300}>WW</Avatar>
            <Avatar className="ml-1" variant="square" color="blue" weight={400}>WW</Avatar>
            <Avatar className="ml-1" variant="square" color="blue" weight={500}>WW</Avatar>
            <Avatar className="ml-1" variant="square" color="blue" weight={600}>WW</Avatar>
            <Avatar className="ml-1" variant="square" color="blue" weight={700}>WW</Avatar>
            <Avatar className="ml-1" variant="square" color="blue" weight={800}>WW</Avatar>
            <Avatar className="ml-1" variant="square" color="blue" weight={900}>WW</Avatar>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}