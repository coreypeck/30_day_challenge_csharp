using UnityEngine;
using System.Collections;

public class NumberWizard : MonoBehaviour {
	// Use this for initialization
	int max = 1000;
	int min = 1;
	int guess = 500;

	void Start () {
		print ("Welcome to Number Wizard");
		print("Pick a Number?");

		print("The highest number is " + max + " and the lowest number is " + min);

		print("Is the number higher or lower than" + guess + "?");
		print("Up = higher, Down = lower, return = Equal");



	}

	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown(KeyCode.UpArrow)){
//		print("Up Arrow Pressed");
		min = guess;
		guess = (max + min) / 2;
		print("Higher or lower than " + guess);
		} else if (Input.GetKeyDown(KeyCode.DownArrow)){
			print("Down Arrow Pressed");
			max = guess;
			guess = (max + min) / 2;
			print("Higher or lower than " + guess);
		} else if (Input.GetKeyDown(KeyCode.Return)){
			print("Return Pressed");
			print("Guess I win!");
		}
	}
}
