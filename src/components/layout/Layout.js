import MainNagition from './MainNavigation'
import classes from './Layout.module.css'

function Layout(props) {
    return <div>
        <MainNagition/>
        <main className={classes.main}>
            {props.children}
        </main>
    </div>
}

export default Layout;