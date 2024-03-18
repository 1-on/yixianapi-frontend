/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: InitialState | undefined) {
    const {loginUser} = initialState ?? {};
    console.log(loginUser)
    return {
        canAdmin: loginUser && loginUser.userRole === 'admin',
    };
}
