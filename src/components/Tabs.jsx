export default function Tabs({ children, buttons, container="menu" }){
    const ButtonsContainer = container;
    return <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
    </>
}