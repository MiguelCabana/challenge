<?php

/**
 * Función que encuentra dos números en un arreglo cuyos valores sumen un número dado ($N).
 *
 * @param array $M El arreglo de números a procesar.
 * @param int $N El número objetivo para encontrar la suma.
 * @return array Un arreglo con los dos números que suman $N, o un arreglo vacío si no se encuentran.
 */
function found_N($M , $N): array {

    // Recorrer el arreglo principal $M
    for ($i = 0; $i < count($M); $i++) { 
    
        // Para cada elemento, buscar un par que sume $N
        for ($j = $i + 1; $j < count($M); $j++) { 

            // Comprobar si la suma de dos elementos es igual a $N
            if ($M[$i] + $M[$j] == $N) {

                // Si se encuentra el par, devolverlo como un arreglo
                return [$M[$i], $M[$j]];
            }
        }
    }

    // Si no se encuentra ningún par, devolver un arreglo vacío
    return [];
}

// Definición del arreglo de números y el número objetivo
$M = [10, 5, 4, 3];
$N = 15;

// Llamada a la función para buscar el par de números
$resultado = found_N($M, $N);

// Verificar si se encontró algún resultado
if (!empty($resultado)) {

    // Imprimir el resultado si se encuentra un par válido
    echo "Resultado: [ " . implode(",", $resultado) . " ]";
} else {

    // Mensaje en caso de no encontrar ningún par que sume $N
    echo "No se encontró ningún subconjunto que sume $N\n";
}
