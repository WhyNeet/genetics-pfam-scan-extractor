# Pfam scan stats extractor
## Usage
### Clone the repository
```shell
git clone https://github.com/WhyNeet/genetics-pfam-scan-extractor.git
```
### Install Deno runtine (if not installed)
Follow the instructions on [Deno Website](https://docs.deno.com/runtime/manual/getting_started/installation/)
### Run the program
Use the following command to run the program:
```shell
deno task start <scan_files_dir>
```
Here is an example command and its output:
```shell
deno task start examples/barcode24
```
```
Task start deno run --allow-read main.ts "examples/barcode24"

file: examples/barcode24/flye_medaka.txt
unique proteins: 2570
min: 5.7; avg: 116.63068717439866; max: 1444.7

file: examples/barcode24/flye_medaka_polypolisher.txt
unique proteins: 2527
min: 5.7; avg: 117.87987531172107; max: 1444.7

file: examples/barcode24/flye_medaka_polypolisher_pypolca.txt
unique proteins: 2527
min: 5.7; avg: 117.87987531172107; max: 1444.7

file: examples/barcode24/flye.txt
unique proteins: 2582
min: 5.7; avg: 116.3131748390295; max: 1444.7
```
