import { Typography, Button, Box, List, ListItem } from "@mui/material";

export const TrainingContent = () => {
  return (
    <>
      <Typography lineHeight={1.8}>
        NSL Technologies helps you connect the world’s best online learning community delivering the best learning experience. Here lots of learners hone the cutting-edge skills to advance their careers, get expertise, and pursue the work they love. We provide training in a diverse range of technologies, projects based on real-time challenges, and Job Support to help individuals to kick start their professional careers.
      </Typography>
      <Typography lineHeight={1.8}>
        NSL Technologies has a proficient trainers’ team with good hands-on experience in the industry. They will share their insights with the candidates as per their requirements thus shaping them a competitive IT professionals. JP aims to make every individual rise high in their success ladder with good career growth as a competitive online training institute. It offers optimal levels of guidance and technical training to candidates with unmatchable expertise.
      </Typography >
      <Box display={'flex'}>
        <Button>Online Training</Button>
        <Button>Corporate Training</Button>
      </Box>
    </>
  );
};

export const ConsultingContent = () => {
  return (
    <>
      <Typography lineHeight={1.8}>
        NSL Technologies will do marketing for H1B, OPT / CPT, and Green card profiles on various technologies in the United States through well-renowned organizations with Attractive PayScale.
      </Typography>
    </>
  );
}

export const FreelancingContent = () => {
  return (
    <>
      <Typography lineHeight={1.8}>
        NSL Technologies is having enormous experience in providing freelance Job Support on 100＋Technologies.
      </Typography>

      <Box>
        <Typography fontWeight="bold" mb={1}>Key Points</Typography>
        <List sx={{ listStyleType: 'disc', pl: 2 }}>
          <ListItem sx={{ display: 'list-item' }}>
            Our strength is 1500+ IT professionals on more than 100+ Technologies.
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Technically Real-time experienced professional with Min 7+ years.
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Work will be completed within the assured time.
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            At Prajosh Technologies you get quality and commitment making it a proven combination for our clients on their work.
          </ListItem>
        </List>
      </Box>

      <Typography lineHeight={1.8}>
        At NSL Technologies, you will get the best services in Freelancing Job Support and other Training programs. So, what are you waiting for? You are just a click away!
      </Typography>
    </>
  );
};

export const DevelopmentContent = () => {
  return (
    <>
      <Typography lineHeight={1.8}>
        Whether it is web development, app development our teams will use the best technologies to stay ahead of the competition with our intuitive development skills. Our team of developers and engineers place us at the center of your business so that we know exactly what solutions you need in order to deliver a high-quality product for your target audience. The immense experience of our IT specialist teams is what sets us apart as the best IT service provider in the Market.
      </Typography>
      <Typography lineHeight={1.8}>
        NSL Technologies delivers high-quality solutions customized to the customer's specific requirements such as extending and enhancing an existing solution or building an entirely new and innovative application at very competitive costs using our flexible delivery models.
      </Typography>
    </>
  );
};
