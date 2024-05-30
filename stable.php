<?php

    echo '<table><tr><td>Name</td><td>Email</td> <td>Password</td></tr>';

    while($row = mysqli_fetch_assoc($run)){
        echo '<tr><td>'.$row['name'].'</td><td>'.$row['email'].'</td><td>'
                .$row['password'].'</td><td>';
    }
    echo '</table>';

?>