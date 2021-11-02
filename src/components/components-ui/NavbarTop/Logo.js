const Logo = () => {
    const logo = 'https://i.pinimg.com/736x/9b/55/00/9b5500887359a38dc030cc8c0ed4e22a.jpg'

    return (<div>
        <img src={logo} className="Header-logo" alt="logo" />
    </div>)
}

Logo.displayName = 'Logo'
export default Logo