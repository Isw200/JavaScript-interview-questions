//  create a secretr that cant access directly

const secretOuter = () => {
    const secret = 'hello';

    return () => secret;
}

const getSecret = secretOuter();
console.log(getSecret())