<?php
trait Hewan {
    public $name;
    public $darah = 50;
    public $jumlahKaki;
    public $keahlian;

    public function atraksi() {
        return "$this->name sedang $this->keahlian";
    }

}

abstract class Fight {
    use Hewan;
    public $attackPower;
    public $deffencePower;

    public function serang($hewan) {
        echo "{$this->name} sedang menyerang $hewan->name <br>";
        $hewan->diserang($this);
        echo "<br>";
    }

    public function diserang($hewan) {
        echo "{$this->name} sedang diserang $hewan->name <br>";
        // $this->darah = $this->darah - ($hewan->attackPower / $this->deffencePower);
        $hewan->darah = $hewan->darah - $hewan->attackPower / $hewan->deffencePower;
        echo "<br>";
    }

    abstract public function getInfoHewan();
}

class Elang extends Fight {
    public function __construct($name) {
        $this->name = $name;
        $this->jumlahKaki = 2;
        $this->keahlian = "terbang tinggi";
        $this->attackPower = 10;
        $this->deffencePower = 5;
        
    }

    public function getInfoHewan() {
        echo "Nama : $this->name <br>";
        echo "Jumlah Kaki : $this->jumlahKaki <br>";
        echo "Atraksi : " . $this->atraksi() . "<br>";
        echo "Darah : $this->darah <br>";
        echo "Attack Power : $this->attackPower <br>";
        echo "Deffence Power : $this->deffencePower <br>";
        echo "<br><br>";
    }

}

class Harimau extends Fight {
    public function __construct($name) {
        $this->name = $name;
        $this->jumlahKaki = 4;
        $this->keahlian = "lari cepat";
        $this->attackPower = 7;
        $this->deffencePower = 8;
       
    }

    public function getInfoHewan() {
        echo "Nama : $this->name <br>";
        echo "Jumlah Kaki : $this->jumlahKaki <br>";
        echo "Atraksi : " . $this->atraksi() . "<br>";
        echo "Darah : $this->darah <br>";
        echo "Attack Power : $this->attackPower <br>";
        echo "Deffence Power : $this->deffencePower <br>";
        echo "<br><br>";
    }


}

// $harimau_1 = new Harimau("harimau_1");
// $harimau_1->getInfoHewan();

// $elang_3 = new Elang("elang_3");
// $elang_3->getInfoHewan();

// $harimau_1->serang($elang_3);
// $elang_3->diserang($harimau_1);
$harimau_1 = new Harimau("harimau_1");
$harimau_1->getInfoHewan();
$elang_3 = new Elang("elang_3");
$elang_3->getInfoHewan();

$harimau_1->serang($elang_3);
$elang_3->serang($harimau_1);

$harimau_1->getInfoHewan();
$elang_3->getInfoHewan();




