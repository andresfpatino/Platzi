<?php 

$input = '07:05:45 PM';

$firstSplit = explode(' ', $input);
# ['07:05:45', 'PM']
$secondSplit = explode(':', $firstSplit[0]);
# ['07', '05', '45']

$time = $firstSplit[1];
$hours = $secondSplit[0];
$minuts = $secondSplit[1];
$seconds = $secondSplit[2];

if ($time === 'AM' && $hours === '12') {
    $hours = '00';
}

if ($time === 'PM' && $hours < '12') {
    $hours = strval(+$hours + 12);
}

$output = "{$hours}:{$minuts}:{$seconds}";

echo "{$output} \n";