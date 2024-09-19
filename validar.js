function validar (form){
    // validar nombre
        let DNI=form.DNI.value.trim()
        let letra = form.letra.value.trim().toUpperCase();


        if(DNI>99999999){
            alert("Por favor ingrese un DNI válido")
            return false;
        }
        if (DNI===""|| isNaN(DNI)||DNI<=0){
            alert("Por favor, ingrese un DNI valido")
            return false;
        }
        if(DNI<11111111){
            alert("Por favor ingresar un DNI valido")
            return false;
        }
        if (letra === "") {
            alert("Por favor, ingrese una letra");
            return false;
        }
        const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

        let letr = DNI % 23;
            let letraC = letras[letr];

            if (letra !== letraC) {
                alert("La letra proporcionada no es correcta.");
                return false;
            }

            // Si todo está correcto
            alert("El número y la letra del DNI son correctos.");
            return true;

    }