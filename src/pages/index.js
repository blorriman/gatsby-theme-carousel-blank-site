/* eslint-disable */
import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Carousel from 're-carousel'
import {
	Button,
	Container,
	Grid,
	Grow,
	makeStyles,
	Typography
} from '@material-ui/core'
import { grey, indigo } from '@material-ui/core/colors'

import MyTheme from '../utils/myTheme'

const useStyles = makeStyles(theme => ({
	imageDiv: {
		height: '65vh',
		// [theme.breakpoints.down('xs')]: {
		// 	height: '55vh'
		// },
		[theme.breakpoints.down('sm')]: {
			height: '55vh'
		},
		marginTop: theme.spacing(-2)
	},
	backgroundImage: {
		marginTop: theme.spacing(-2),
		width: '100%',
		height: '100%',
		backgroundRepeat: 'repeat-y',
		backgroundSize: 'cover'
	},
	backgroundGrid: {
		// position: 'absolute',
		top: '55vh',
		minHeight: '65vh',
		[theme.breakpoints.down('xs')]: {
			minHeight: '65vh',
			top: '55vh'
		},
		[theme.breakpoints.down('sm')]: {
			minHeight: '35vh',
			top: '17vh'
		}
	},
	logo: {
		backgroundColor: grey[400],
		height: 250,
		width: 250,
		// [theme.breakpoints.down('xs')]: {
		// 	height: 150,
		// 	width: 150,
		// 	top: '48vh'
		// },
		[theme.breakpoints.down('sm')]: {
			height: 150,
			width: 150,
			top: '48vh'
		},
		borderRadius: '50%',
		padding: theme.spacing(1),
		position: 'absolute',
		top: '55vh',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: 9999
	},
	mainDiv: {
		height: '35vh',
		backgroundColor: theme.palette.primary.main,
		marginTop: theme.spacing(-2.5),
		paddingTop: theme.spacing(10),
		paddingBottom: theme.spacing(5)
	},
	button: {
		margin: theme.spacing(1)
	}
}))

export default ({ data }) => {
	const classes = useStyles()
	const theme = MyTheme
	return (
		<>
			<div className={classes.imageDiv}>
				<Carousel loop auto duration={2000}>
					<BackgroundImage
						Tag='section'
						className={classes.backgroundImage}
						fluid={data.six.childImageSharp.fluid}
					>
						<Grid
							container
							direction='column'
							justify='center'
							alignItems='center'
							className={classes.backgroundGrid}
						>
							<Grid item xs={12} sm={10}>
								<Typography
									variant='h2'
									align='center'
									style={{ color: 'white' }}
									gutterBottom
								>
									Hello Gatsby
								</Typography>
							</Grid>
						</Grid>
					</BackgroundImage>
					<BackgroundImage
						Tag='section'
						className={classes.backgroundImage}
						fluid={data.one.childImageSharp.fluid}
					>
						<div className={classes.backgroundGrid} />
					</BackgroundImage>
					<BackgroundImage
						Tag='section'
						className={classes.backgroundImage}
						fluid={data.two.childImageSharp.fluid}
					>
						<div className={classes.backgroundGrid} />
					</BackgroundImage>
					<BackgroundImage
						Tag='section'
						className={classes.backgroundImage}
						fluid={data.three.childImageSharp.fluid}
					>
						<div className={classes.backgroundGrid} />
					</BackgroundImage>
				</Carousel>
			</div>

			<div className={classes.logo}>
				<Img fluid={data.BL.childImageSharp.fluid} className={classes.media} />
			</div>

			<div className={classes.mainDiv}>
				<Container component='main' maxWidth='md'>
					<Grow in={true} timeout={800}>
						<>
							<Typography
								variant='h4'
								style={{ color: indigo[500] }}
								gutterBottom
							>
								Homepage in a user's site
							</Typography>
							<Typography
								variant='body1'
								color='textPrimary'
								gutterBottom
								style={{ color: 'white' }}
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
								velit explicabo aspernatur ea! Sequi veniam, laudantium minus
								eaque repellat deleniti saepe deserunt veritatis omnis impedit.
								Voluptas aperiam maiores similique sed?
							</Typography>

							<center>
								<Link to='/about' style={{ textDecoration: 'none' }}>
									<Button
										variant='contained'
										color='secondary'
										size='large'
										className={classes.button}
									>
										Learn More
									</Button>
								</Link>
							</center>
						</>
					</Grow>
				</Container>
			</div>
		</>
	)
}

export const query = graphql`
	query {
		six: file(name: { eq: "6" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 1920) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		one: file(name: { eq: "10" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 1920) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		two: file(name: { eq: "2" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 1920) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		three: file(name: { eq: "8" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 1920) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		BL: file(name: { eq: "BL-grey" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 1920) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
