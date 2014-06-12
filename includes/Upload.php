<?php
class Upload {
	const UPLOAD_DIR = 'uploads/';

	public static function reArrange($files) {
		// Rearranges $_FILES in a more developer-friendly array and returns the rearranged array
		$newFiles = array();
		$fileCount = count($files['name']);
		$fileKeys = array_keys($files);

		for ($i=0; $i<$fileCount; $i++) {
			foreach ($fileKeys as $key) {
				$newFiles[$i][$key] = $files[$key][$i];
			}
		}

		return $newFiles;
	}

	public static function file($file, $extraData) {
		// Uploads file with extraData as start of filename and returns the complete filename after upload
		$fileTmp = $file['tmp_name'];
		$fileName = implode($extraData, '_') .'_'. time() . '.' . pathinfo($file['name'], PATHINFO_EXTENSION);
		$uploadfile = '../'. Upload::UPLOAD_DIR . $fileName;

		if (move_uploaded_file($fileTmp, $uploadfile)) {
			return Upload::UPLOAD_DIR . $fileName;
		}
	}
}